import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass'))
            .toBe('someClass');
    });

    test('with additional params', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass', {
            hovered: true,
            scrollable: true
        }, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mods with false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', {
            hovered: true,
            scrollable: false
        }, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mods with undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', {
            hovered: true,
            scrollable: undefined
        }, ['class1', 'class2']))
            .toBe(expected);
    });
});
