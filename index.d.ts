import PropTypes from "prop-types"
import React from "react"

export type $TEMPORARY$object<T extends object> = T;
export type $TEMPORARY$string<T extends string> = T;
export type $TEMPORARY$array<T extends any[]> = T;

/**
 * https://github.com/facebook/flow/blob/master/lib/core.js
 */
type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;
export type $ArrayBufferView = TypedArray | DataView;
export type TimeoutID = number;


/**
 * https://github.com/facebook/flow/blob/master/lib/react.js
 */
export type React$Context<T> = React.Context<T>;
// TODO: These should become React.AbstractComponent based
export type React$Node = React.ReactNode;
export type React$Element<T> = React.ElementType<T>;
export type React$Component<P = {}, S = {}> = React.Component<P, S>;
export type React$ComponentType<T> = React.ComponentType<T>;
export type ReactPropsCheckType = (
    props: any,
    propName: string,
    componentName: string,
    href?: string
) => Error | null | undefined;
export type ReactPropsChainableTypeChecker = {
    (props: any, propName: string, componentName: string, href?: string): Error | undefined | null,
    isRequired: ReactPropsCheckType,
};

// TODO: These are actually Flow's utility types
export type $Exact<T extends object> = T;

// TODO: These are actually just RN types
export type $FlowIssue = any;
export type $FlowFixMe = any;
export type $FlowFixMeProps = any;
export type $FlowFixMeState = any;
export type $FlowFixMeEmpty = any;
export type Stringish = string;

// TODO: These are actually prop-types types
export type React$PropType$Primitive<T> = PropTypes.Requireable<T>

/**
 * This isn’t actually an existing type, but instead a way to transform `import typeof`
 * into a plain `import` and figure out the correct type at build time. Flow allows one
 * to export a class or an object and `import typeof` will result either the type of the
 * object or the class, but not the `typeof` the class.
 * 
 * For instance:
 * 
 *   import typeof Foo from "…"
 * 
 * Will be transformed by the transformer to:
 * 
 *   import { ClassOrType } from "flow-builtin-types"
 *   import _Foo from "…"
 *   type Foo = ClassOrType<typeof _Foo>
 */
type ClassOrType<T> = T extends { new(...args: any): any } ? InstanceType<T> : T;
// TESTS:
// class Foo { }
// const o = { foo: "foo" }
//
// type FC = ClassOrType<typeof Foo>
// type FO = ClassOrType<typeof o>