const ROOT = '';
const DEFAULT = `${ROOT}/`;
const SIGNIN = `${ROOT}/signin`;
const SIGNUP = `${ROOT}/signup`;
const ORGANIZATION = `${ROOT}/org`;
const ORGANIZATION_PROFILE = `${ROOT}/org/profile/:organization`;
const INDIVIDUAL = `${ROOT}/ind`;
const INDIVIDUAL_PROFILE = `${ROOT}/ind/profile/:individual`;

const PATHS = {
	'root':ROOT,
	'default':DEFAULT,
	'signin':SIGNIN,
	'signup':SIGNUP,
	'organization':ORGANIZATION,
	'organizationProfile':ORGANIZATION_PROFILE,
	'individual':INDIVIDUAL,
	'individualProfile':INDIVIDUAL_PROFILE
}
export default PATHS;