import { spawn } from 'child_process';

export function startStorybook() {
    return spawn('npm', ['run', 'storybook'], {
        shell: true,
        stdio: 'inherit'
    });
}
