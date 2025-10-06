
import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL" 
// guest API


    // REGISTER API - called by Auth component when register btn clickd
    export const registerAPI = async (reqBody) => {
        return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
    }

    // LOGIN API
    // HOME BOOKS API
    // ALL CAREER API
// AUTHERIZED USER API - USER
    // VIEW ALL BOOKS
    // VIEW SINGLE BOOKS
    // UPLOAD BOOK
    // PROFILE UPDATE
    // PURCHASE
    // APPROVE BOOKS

// AUTHERIZED USER API - ADMIN
    // ADD CAREER 
    // UPDATE ADMIN
    // LIST BOOKS
    // LIST USERS
    // APPROVE BOOKS