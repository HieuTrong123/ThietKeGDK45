export const OBJECT_ID_RULE = /^[0-9a-fA-F]{24}$/
export const OBJECT_ID_RULE_MESSAGE = 'Your string fails to match the Object Id pattern'

export const PASSWORD_RULE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,16}$/
export const PASSWORD_RULE_MESSAGE = 'Your password must be least 8-16 chars long and include least 1 lowercase letter, 1 uppercase letter and 1 specical character'

export const PHONENUMBER_RULE = /^[0-9]{10,15}$/
export const PHONENUMBER_RULE_MESSAGE='Your phone is invalid'
