import User from "../models/user.model";

import { connect } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
    id,
    first_name,
    last_name,
    image_url,
    email_address,
)