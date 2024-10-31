import { useState } from 'react';

interface FormData {
  email: string;
  password: string;
}

export function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 space-y-6 bg-background-secondary rounded-2xl shadow-lg">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-secondary">Please sign in to continue</p>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            placeholder="••••••••"
          />
          {errors.password && <span className="text-sm text-red-500">{errors.password}</span>}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
        >
          Sign In
        </button>

        <div className="flex items-center justify-center space-x-4 text-sm">
          <a href="#forgot-password" className="text-accent hover:text-accent-hover">
            Forgot Password?
          </a>
          <span className="text-secondary">•</span>
          <a href="#register" className="text-accent hover:text-accent-hover">
            Create Account
          </a>
        </div>
      </form>
    </div>
  );
}