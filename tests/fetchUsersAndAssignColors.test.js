/**
 * Unit tests for fetchUsersAndAssignColors function using Jest framework
 */

// Importing the fetchUsersAndAssignColors function for testing
import fetchUsersAndAssignColors from '../src/helpers/fetchUsersAndAssignColors.js';

// Jest setup for installing Jest
// Run the following command in your terminal to install Jest as a dev dependency:
// npm install --save-dev jest

// Add the following script to your package.json for running tests:
// "scripts": {
//   "test": "jest"
// }

// Place the tests in a separate folder named tests to organize them properly

/* global describe, test, expect, jest, afterEach, global, beforeAll, afterAll*/

// Mock console.error to avoid cluttering test output
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
});

describe('fetchUsersAndAssignColors', () => {
  test('should fetch users and assign colors successfully', async () => {
    const usersWithColors = await fetchUsersAndAssignColors();
    expect(Array.isArray(usersWithColors)).toBe(true);
    expect(usersWithColors.length).toBeGreaterThan(0);
    usersWithColors.forEach((user) => {
      expect(user).toHaveProperty('color');
      expect(typeof user.color).toBe('string');
    });
  });

  test('should throw an error if the users API fails', async () => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce(() =>
        Promise.resolve({ ok: false, status: 404, statusText: 'Not Found' }),
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => ({ data: [{ name: 'red' }, { name: 'blue' }] }),
        }),
      );

    await expect(fetchUsersAndAssignColors()).rejects.toThrow(
      'Failed to fetch users: 404, Not Found',
    );
  });

  test('should throw an error if the colors API fails', async () => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => ({ id: 1, name: 'John Doe' }),
        }),
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: false,
          status: 500,
          statusText: 'Internal Server Error',
        }),
      );

    await expect(fetchUsersAndAssignColors()).rejects.toThrow(
      'Failed to fetch colors: 500, Internal Server Error',
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
