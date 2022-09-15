import { render, screen, cleanup } from '@testing-library/react';
import QuestionCard from '../components/questioncard';

afterEach(() => {
    cleanup();
});