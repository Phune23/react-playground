/**
 * Cấu hình Monaco Editor để hỗ trợ JSX tốt hơn
 */

export const configureMonacoForJSX = (monaco) => {
  // Thiết lập compiler options cho TypeScript/JavaScript
  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    jsx: monaco.languages.typescript.JsxEmit.React,
    jsxFactory: 'React.createElement',
    reactNamespace: 'React',
    allowNonTsExtensions: true,
    allowJs: true,
    target: monaco.languages.typescript.ScriptTarget.Latest,
  });

  // Thêm định nghĩa cho React và ReactDOM
  const reactTypes = `
    declare namespace React {
      function createElement(type: any, props?: any, ...children: any[]): any;
      function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
      function useEffect(effect: () => void | (() => void), deps?: any[]): void;
      function useContext<T>(context: React.Context<T>): T;
      function useRef<T>(initialValue: T): { current: T };
      function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
      function useMemo<T>(factory: () => T, deps: any[]): T;
      
      interface Context<T> {
        Provider: any;
        Consumer: any;
      }
      
      function createContext<T>(defaultValue: T): Context<T>;
    }
    
    declare function render(element: any): void;
  `;

  // Thêm định nghĩa type cho React
  monaco.languages.typescript.javascriptDefaults.addExtraLib(
    reactTypes,
    'react.d.ts'
  );

  // Tạo custom theme cho code React
  monaco.editor.defineTheme('reactThemeLight', {
    base: 'vs',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '008000', fontStyle: 'italic' },
      { token: 'keyword', foreground: '0000FF' },
      { token: 'string', foreground: 'A31515' },
      { token: 'identifier', foreground: '001080' },
      { token: 'type', foreground: '267F99' },
      { token: 'delimiter', foreground: '000000' },
      { token: 'number', foreground: '098658' },
      { token: 'tag', foreground: '800000' },
      { token: 'attribute.name', foreground: 'ff0000' },
      { token: 'attribute.value', foreground: '0000ff' },
    ],
    colors: {
      'editor.foreground': '#000000',
      'editor.background': '#FFFFFF',
      'editor.selectionBackground': '#ADD6FF',
      'editor.lineHighlightBackground': '#F0F0F0',
      'editorCursor.foreground': '#000000',
      'editorWhitespace.foreground': '#BFBFBF'
    }
  });
  
  monaco.editor.defineTheme('reactThemeDark', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '6A9955', fontStyle: 'italic' },
      { token: 'keyword', foreground: '569CD6' },
      { token: 'string', foreground: 'CE9178' },
      { token: 'identifier', foreground: '9CDCFE' },
      { token: 'type', foreground: '4EC9B0' },
      { token: 'delimiter', foreground: 'D4D4D4' },
      { token: 'number', foreground: 'B5CEA8' },
      { token: 'tag', foreground: '569CD6' },
      { token: 'attribute.name', foreground: '9CDCFE' },
      { token: 'attribute.value', foreground: 'CE9178' },
    ],
    colors: {
      'editor.foreground': '#D4D4D4',
      'editor.background': '#1E1E1E',
      'editor.selectionBackground': '#264F78',
      'editor.lineHighlightBackground': '#2D2D30',
      'editorCursor.foreground': '#AEAFAD',
      'editorWhitespace.foreground': '#3B3B3B'
    }
  });
};