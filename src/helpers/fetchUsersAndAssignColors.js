/**
 * Write a generic JS function that fetches a list of users from an imaginary API,
 * then, after successfully retrieving it, fetches a list of colors.
 * Once both lists are successfully retrieved, it assigns a random color to each user
 * and returns the list of users with assigned colors.
 * In case of an error, it logs to the console, and also logs to the console once the operation is finished.
 */

/**
 * Fetches a list of users and a list of colors from public APIs, then assigns a random color to each user.
 * @async
 * @function fetchUsersAndAssignColors
 * @returns {Promise<Array>} Returns the list of users with assigned colors.
 */
export default async function fetchUsersAndAssignColors() {
  try {
    // Fetch users and colors in parallel using Promise.all
    const [usersResponse, colorsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://reqres.in/api/unknown'),
    ]);

    // Error handling for both API requests
    if (!usersResponse.ok) {
      throw new Error(
        `Failed to fetch users: ${usersResponse.status}, ${usersResponse.statusText}`,
      );
    }
    if (!colorsResponse.ok) {
      throw new Error(
        `Failed to fetch colors: ${colorsResponse.status}, ${colorsResponse.statusText}`,
      );
    }

    const users = await usersResponse.json();
    const colorsData = await colorsResponse.json();
    const colors = colorsData.data.map((item) => item.name); // Extract color names

    // Validate the data
    if (!Array.isArray(users) || users.length === 0) {
      throw new Error('User data is empty or not in array format');
    }
    if (!Array.isArray(colors) || colors.length === 0) {
      throw new Error('Color data is empty or not in array format');
    }

    // Assign a random color to each user
    const usersWithColors = users.map((user) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return { ...user, color: randomColor };
    });

    return usersWithColors;
  } catch (error) {
    if (error.name === 'TypeError') {
      console.error('Network error or URL not reachable:', error);
    } else if (error.message.includes('Failed to fetch')) {
      console.error('API response error:', error);
    } else {
      console.error('Unexpected error occurred:', error);
    }
    throw error;
  } finally {
    console.log('The operation has finished');
  }
}
