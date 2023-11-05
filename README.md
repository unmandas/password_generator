In this Project 4 types of React Hooks are being used:

1. useState
2. useCallback: To cache a function definition between re-renders. Basically for the purpose of Memoisation
    You need to pass two things to useCallback:
        a. A function definition that you want to cache between re-renders.
        b. A list of dependencies including every value within your component that’s used inside your function.
    It involves storing the results of expensive function calls and returning the cached result when the same inputs occur again, instead of re-computing the result. This can significantly reduce the computational time and resources required for certain tasks.

3. useEffect: It is a React Hook that lets you synchronize a component with an external system.
4. useRef: It is a React Hook that lets you reference a value that’s not needed for rendering.