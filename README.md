# How to use

- Run `npx create-react-app use-loopin-ui-components
- Now update src/App.js with following code
```
    import './App.css';
    import { Button } from 'loopin-ui-components';

    function App() {
    return (
        <div className="App">
            <Button
            variant="text"
            size="medium"
            onClick={() => {
                alert('Button clicked')
            }}
            >
            Connect Slack
            </Button>
        </div>
    );
    }

    export default App;
```