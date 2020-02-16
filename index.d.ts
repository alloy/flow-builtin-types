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

export type ElementRef<C extends React.ComponentClass<any> | React.SFC<any> | keyof HTMLElementTagNameMap> =
    C extends React.ComponentClass<any>
    ? InstanceType<C>
    : C extends React.SFC<any>
    ? undefined
    : C extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[C]
    : never;
// TESTS:
// class ClassBased extends React.Component<{ foo: string }> { }
// function FunctionBased(props: { foo: number }) {
//     return (<div>foo</div>)
// }
// type CB = ElementRef<typeof ClassBased>
// type FB = ElementRef<typeof FunctionBased>
// type JB = ElementRef<'div'>

// Taken from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/f47f8eeea9e4691ebe5e93db524c3f645de10546/types/react-with-styles/index.d.ts#L43-L50
type ComponentClassProps<C> = C extends new (props: infer P, context?: any) => any ? P : never;
type SFCProps<C> = C extends (props: infer P & { children?: React.ReactNode }, context?: any) => any ? P : never;
export type ElementProps<C> = C extends React.ComponentClass<any>
    ? ComponentClassProps<C>
    : C extends React.SFC<any>
    ? SFCProps<C>
    : any;
export type ElementConfig<C> = JSX.LibraryManagedAttributes<C, ElementProps<C>>;

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