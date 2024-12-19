"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { usePathname, useRouter } from "next/navigation";

interface LoadingContextType {
  isLoading: boolean;
  loaderText: string;
  setLoaderText: (text: string) => void;
  navigateWithLoader: (path: string, text: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loaderText, setLoaderText] = useState("Loading...");
  const router = useRouter();
  const pathname = usePathname();

  const navigateWithLoader = async (path: string, text: string) => {
    setLoaderText(text);
    setIsLoading(true);
    router.push(path);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 500);

    setIsLoading(true);

    return () => clearTimeout(timer); 
  }, [pathname]);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        loaderText,
        setLoaderText,
        navigateWithLoader,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
