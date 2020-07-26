const API_URL = 'http://localhost:5000';

async function listLogEntries() {
  const response = await fetch(`${API_URL}/api/logs`)
}
