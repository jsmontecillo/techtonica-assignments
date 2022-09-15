import { render, screen, cleanup } from '@testing-library/react';
import QuestionGrid from '../components/questiongrid';

afterEach(() => {
    cleanup();
});

test('my first test', () => {
    expect(true).toBe(true);
});

test("math", () => {
    expect(1+1).toBe(2);
});

test("arrays", () => {
    const arr = [1, 2, 3, 4]
    expect(arr).toEqual([1,2,3,4]);
})