import PropTypes from "prop-types"
import React from "react"

export type $TEMPORARY$object<T extends object> = T;
export type $TEMPORARY$string<T extends string> = T;
export type $TEMPORARY$array<T extends any[]> = T;

/**
 * https://github.com/facebook/flow/blob/master/lib/react.js
 */
export type React$Context<T> = React.Context<T>;
// TODO: These should become React.AbstractComponent based
export type React$Node = React.ReactNode;
export type React$Element<T> = React.ElementType<T>;
export type React$ComponentType<T> = React.ComponentType<T>;
export type ReactPropsCheckType = (
    props: any,
    propName: string,
    componentName: string,
    href?: string
) => Error | null | undefined;

// TODO: These are actually Flow's utility types
export type $Exact<T extends object> = T;

// TODO: These are actually just RN types
export type $FlowIssue = any;
export type $FlowFixMe = any;
export type $FlowFixMeProps = any;
export type $FlowFixMeState = any;
export type $FlowFixMeEmpty = any;
export type Stringish = string;

// TGODO: These are actually prop-types types
export type React$PropType$Primitive<T> = PropTypes.Requireable<T>