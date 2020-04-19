import _isString from "lodash/isString";
import isFalseAttribute from "./isFalseAttribute";

export default function isTrueAttribute(str) {
    return !isFalseAttribute(str);
}
