// Simple test script to test the API
const testData = {
  name: "Test Academy",
  type: "Art",
  address: {
    line1: "123 Test Street",
    city: "Test City",
    state: "Test State",
    zip: "12345"
  },
  phone: "123-456-7890",
  trainers: [
    {
      name: "John Doe",
      experience_years: 5,
      specializations: ["Piano", "Guitar"]
    }
  ],
  achievements: [
    {
      award: "Best Music Academy 2023",
      notable_alumni: ["Jane Smith"],
      recognition: "State Level"
    }
  ],
  average_rating: 4.5,
  art_programs: [
    {
      aname: "Piano Lessons",
      styles: ["Classical", "Jazz"],
      instruments: ["Piano"],
      level: "Beginner"
    }
  ],
  sports_programs: []
};

// Test creating a new academy
async function testCreateAcademy() {
  try {
    const response = await fetch('http://localhost:3001/api/academic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    console.log('Academy created successfully:');
    console.log(result);
    return result;
  } catch (error) {
    console.error('Error creating academy:', error);
  }
}

// Test fetching all academies
async function testGetAcademies() {
  try {
    const response = await fetch('http://localhost:3001/api/academic');
    const result = await response.json();
    console.log('Academies fetched successfully:');
    console.log(result);
    return result;
  } catch (error) {
    console.error('Error fetching academies:', error);
  }
}

// Run the tests
async function runTests() {
  console.log('Creating a test academy...');
  await testCreateAcademy();
  
  console.log('\nFetching all academies...');
  await testGetAcademies();
}

runTests();