import { Toaster } from './components/ui/sonner';
import InputField from './components/custom/InputField';
import TodoDisplay from './components/custom/TodoDisplay';
import { ThemeProvider } from 'next-themes';

const App = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="sm:w-[40vw] h-screen mx-auto p-10">
        <InputField />
        <TodoDisplay />
      </div>
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
