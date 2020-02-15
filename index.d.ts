import PropTypes from "prop-types"

export type $TEMPORARY$object<T extends object> = T;
export type $TEMPORARY$string<T extends string> = T;
export type $TEMPORARY$array<T extends any[]> = T;

// TODO: These are actually just RN types
export type $FlowFixMeProps = any;
export type $FlowFixMeState = any;

// TGODO: These are actually prop-types types
export type React$PropType$Primitive<T> = PropTypes.Requireable<T>