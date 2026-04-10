"use client";

/**
 * Production-Ready Error Boundary
 * Catches React errors and provides graceful fallback UI
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetKeys?: Array<string | number>;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorCount: number;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError } = this.props;

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }

    // Call custom error handler if provided
    if (onError) {
      try {
        onError(error, errorInfo);
      } catch (handlerError) {
        console.error('Error in error handler:', handlerError);
      }
    }

    this.setState((prevState) => ({
      errorInfo,
      errorCount: prevState.errorCount + 1,
    }));
  }

  componentDidUpdate(prevProps: Props) {
    const { resetKeys = [] } = this.props;
    const { hasError, errorCount } = this.state;

    // Auto-reset if resetKeys change
    if (hasError && resetKeys.length > 0) {
      const prevResetKeys = prevProps.resetKeys || [];
      const hasResetKeyChanged = resetKeys.some(
        (key, index) => key !== prevResetKeys[index]
      );

      if (hasResetKeyChanged) {
        this.resetErrorBoundary();
      }
    }

    // Auto-reset after 3 errors (prevent error loop)
    if (errorCount >= 3) {
      console.error('Too many errors, redirecting to home');
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    }
  }

  resetErrorBoundary = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  logErrorToService(error: Error, errorInfo: ErrorInfo) {
    // TODO: Implement actual error logging service (Sentry, LogRocket, etc.)
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    // For now, just log to console
    console.error('[Error Service]', errorData);

    // In production, send to error tracking service:
    // fetch('/api/log-error', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorData),
    // }).catch(() => {});
  }

  render() {
    const { hasError, error, errorInfo, errorCount } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // Use custom fallback if provided
      if (fallback) {
        return fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted/20">
          <Card className="max-w-2xl w-full">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <CardTitle className="text-2xl">Something went wrong</CardTitle>
              <CardDescription className="text-base">
                We encountered an unexpected error. Don't worry, we've logged the issue and will investigate.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Error details in development */}
              {process.env.NODE_ENV === 'development' && error && (
                <div className="p-4 bg-muted rounded-lg overflow-auto max-h-64">
                  <p className="font-mono text-sm text-destructive font-semibold mb-2">
                    {error.toString()}
                  </p>
                  {error.stack && (
                    <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
                      {error.stack}
                    </pre>
                  )}
                  {errorInfo?.componentStack && (
                    <details className="mt-4">
                      <summary className="cursor-pointer text-xs font-semibold text-muted-foreground">
                        Component Stack
                      </summary>
                      <pre className="text-xs text-muted-foreground whitespace-pre-wrap mt-2">
                        {errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              {/* Error count warning */}
              {errorCount >= 2 && (
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-sm text-destructive font-medium">
                    Multiple errors detected. You'll be redirected to the home page if this continues.
                  </p>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={this.resetErrorBoundary}
                  className="flex-1"
                  variant="default"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>

                <Button
                  onClick={() => (window.location.href = '/')}
                  className="flex-1"
                  variant="outline"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Button>
              </div>

              {/* Help text */}
              <p className="text-sm text-muted-foreground text-center">
                If this problem persists, please{' '}
                <a
                  href="/contact"
                  className="text-primary hover:underline font-medium"
                >
                  contact support
                </a>{' '}
                and we'll help you out.
              </p>
            </CardContent>
          </Card>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;

/**
 * Hook-based error boundary for async operations
 */
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return setError;
}
