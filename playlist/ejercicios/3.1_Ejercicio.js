const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
];

function yourFunction(input) {
    // Separa el último elemento y la extensión
    const extension = input.pop(); // Elimina y obtiene el último elemento
    // Junta el resto con '/' y añade la extensión al final
    const result = input.join('/') + '.' + extension;
    console.log(result);
    return result; // retorna el resultado si es necesario
}

yourFunction(input1); // 'Downloads/Videos/capture.mp4'

const input2 = [
    'CodinGame',
    'python',
    'py',
];
yourFunction(input2); // 'CodinGame/python.py'

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
];
yourFunction(input3); // 'programming/languages/easy/beginner/useful/pythonstuff.py'
