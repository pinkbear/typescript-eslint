import { TSESTree } from '@typescript-eslint/typescript-estree';
import ESLintPatternVisitor from 'eslint-scope/lib/pattern-visitor';
import { ScopeManager } from './ScopeManager';
import {
  PatternVisitorCallback,
  PatternVisitorOptions,
  Visitor,
} from './Options';

interface PatternVisitor extends Visitor {
  options: any;
  scopeManager: ScopeManager;
  parent?: TSESTree.Node;
  rightHandNodes: TSESTree.Node[];

  Identifier(pattern: TSESTree.Node): void;
  Property(property: TSESTree.Node): void;
  ArrayPattern(pattern: TSESTree.Node): void;
  AssignmentPattern(pattern: TSESTree.Node): void;
  RestElement(pattern: TSESTree.Node): void;
  MemberExpression(node: TSESTree.Node): void;
  SpreadElement(node: TSESTree.Node): void;
  ArrayExpression(node: TSESTree.Node): void;
  AssignmentExpression(node: TSESTree.Node): void;
  CallExpression(node: TSESTree.Node): void;
}
const PatternVisitor = ESLintPatternVisitor as {
  new (
    options: PatternVisitorOptions,
    rootPattern: any,
    callback: PatternVisitorCallback,
  ): PatternVisitor;

  // static methods
  isPattern(node: TSESTree.Node): boolean;
};

export { PatternVisitor };
