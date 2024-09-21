const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
];

function yourFunction(input) {
    const extension = input.pop(); 
    const result = input.join('/') + '.' + extension;
    console.log(result);
    
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
