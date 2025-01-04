// src/app/Providers.tsx
"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const queryClient = React.useMemo(() => new QueryClient(), []);
    
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default Providers;
