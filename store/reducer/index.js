import { combineReducers } from "redux";

import users from "./users";
import wacanas from "./wacanas";
import questions from "./questions";
import articles from "./articles";
import auth from "./auth";

export default combineReducers({ auth, users, wacanas, articles, questions });
