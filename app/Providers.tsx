"use client";

import { SidebarProvider } from '@/components/ui/sidebar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const queryClient = React.useMemo(() => new QueryClient(), []);
    
    return (
        <QueryClientProvider client={queryClient}>
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </QueryClientProvider>
    );
};

export default Providers;
