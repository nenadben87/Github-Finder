
class Github {
  constuctor() {
    this.client_id = '538aadf563968baf42a5';
    this.client_secret = '05f6fbf12fb0b455380099b6de98968a4e792427';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();

    return {
      profile: profileData,
      repos: repoData
    }
  }
}