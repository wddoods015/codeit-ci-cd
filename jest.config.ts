import type { Config } from 'jest';
import nextJest from 'next/jest';

// `next/jest`로 Next.js 프로젝트의 경로를 설정
const createJestConfig = nextJest({
  dir: './', // Next.js 프로젝트의 경로를 설정
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // jest.setup.ts 파일 설정
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // TypeScript 파일을 ts-jest로 변환
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // TypeScript와 JavaScript 확장자를 포함
  globals: {
    'ts-jest': {
      isolatedModules: true, // TypeScript 파일을 독립적으로 변환
    },
  },
};

export default createJestConfig(config);
