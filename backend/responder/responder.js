/**
 * This Is Only For Responder----------------------------
 * @param {response} res 
 * @param {status Code} code 
 * @param {Send Data} json
 */
const response = (res, code, json) => {
    return res.status(code).json(json)
}
module.exports.response = response