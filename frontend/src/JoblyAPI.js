import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};
    
    const reqObj = {url, method, data, params, headers}
    console.log("reqObj: ", reqObj);

    try {
      // const res = await (await axios({url, method, data, params, headers})).data;

      // Not showing up for Profile component.
      // console.log("Response: ", res);
      
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get all companies */
  static async getCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  /** Get companies based on search term */
  static async findCompanies(searchTerm) {
    let res = await this.request(`companies/?nameLike=${searchTerm}`);
    return res.companies;
  }

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all jobs */
  static async getJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  /** Get details on a job by id */
  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  /** Get details on a user by username */
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    console.log("Api response user: ", res.user);
    return res.user;
  }

  /** Post a new user to /register route */
  static async registerUser(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  /** Post a user to /token to retirieve a token */
  static async loginUser(data) {
    let res = await this.request(`auth/token`, data, "post");
    this.token = res.token;
    return res.token;
  }

  /** Patch a user to /users/:username to update data */
  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

// Exports
export default JoblyApi;