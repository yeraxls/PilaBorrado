function crearHistorialUndo() {
    const undoStack = [];
    const redoStack = [];

    return {
        guardar(fnUndo, fnRedo) {
            undoStack.push({ fnUndo, fnRedo });
            redoStack.length = 0;
        },
        deshacer() {
            if (!undoStack.length) return;
            const accion = undoStack.pop();
            accion.fnUndo();
            redoStack.push(accion);
        },
        rehacer() {
            if (!redoStack.length) return;
            const accion = redoStack.pop();
            accion.fnRedo();
            undoStack.push(accion);
        }
    };
}

function obtenerValor(campo) {
    if (campo.type === 'checkbox' || campo.type === 'radio') return campo.checked;
    return campo.value;
}

function asignarValor(campo, valor) {
    if (campo.type === 'checkbox' || campo.type === 'radio') {
        campo.checked = valor;
    } else {
        campo.value = valor;
    }
}

function activarUndoFormulario(selector = 'input, textarea, select') {
    const historial = crearHistorialUndo();
    const campos = document.querySelectorAll(selector);

    campos.forEach((campo) => {
        campo.dataset.prev = JSON.stringify(obtenerValor(campo));

        campo.addEventListener('focus', () => {
            campo.dataset.prev = JSON.stringify(obtenerValor(campo));
        });

        const registrarCambio = () => {
            const anterior = JSON.parse(campo.dataset.prev);
            const actual = obtenerValor(campo);
            if (anterior === actual) return;

            historial.guardar(
                () => asignarValor(campo, anterior),
                () => asignarValor(campo, actual)
            );

            campo.dataset.prev = JSON.stringify(actual);
        };

        campo.addEventListener('input', registrarCambio);
        campo.addEventListener('change', registrarCambio);
    });

    document.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();
        if (e.ctrlKey && !e.shiftKey && key === 'z') {
            e.preventDefault();
            historial.deshacer();
        }
        if ((e.ctrlKey && key === 'y') || (e.ctrlKey && e.shiftKey && key === 'z')) {
            e.preventDefault();
            historial.rehacer();
        }
    });

    return historial;
}
