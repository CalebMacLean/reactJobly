const tokenOne = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTcxODQxNDEyOX0.WSGj_ydYEbnv70karGRm90g6rkyNTNwjaaqA3kf9wFM";
const tokenTwo = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTcxODQxNDEyOH0.cgT2m5HUxrB2AAgz759pM4HkbmyMZvuROW_QJ7YXPIk";
const tokenThree = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc"
console.log("Tokens One and Two are the same: ", tokenOne === tokenTwo);
console.log("Tokens One and Three are the same: ", tokenOne === tokenThree);
console.log("Tokens Two and Three are the same: ", tokenThree === tokenTwo);
