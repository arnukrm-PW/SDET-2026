const ENV_URL={
    dev:process.env.dev_url,
    qa:process.env.qa_url,
    stage:process.env.stage_url,
    prod:process.env.prod_url
}
const ENV=process.env.ENV||"qa";
const base_URL=ENV_URL[ENV]
const SD_username=process.env.SD_username
const SD_password=process.env.SD_password


module.exports={base_URL,SD_username,SD_password}