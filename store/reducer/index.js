import { combineReducers } from "redux";

import users from "./users";
import wacanas from "./wacanas";
import questions from "./questions";
import articles from "./articles";

export default combineReducers({ users, wacanas, articles, questions });
