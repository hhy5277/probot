/** Declaration file generated by dts-gen */

declare module 'bunyan-sentry-stream' {
    export = bunyan_sentry_stream;

    declare function bunyan_sentry_stream(client: any): any;
    
    declare namespace bunyan_sentry_stream {
        class SentryStream {
            constructor(...args: any[]);
    
            deserializeError(...args: any[]): void;
    
            getSentryLevel(...args: any[]): void;
    
            write(...args: any[]): void;
    
        }
    
        const prototype: {
        };
    
        namespace SentryStream {
            namespace prototype {
                function deserializeError(...args: any[]): void;
    
                function getSentryLevel(...args: any[]): void;
    
                function write(...args: any[]): void;
    
            }
    
        }
    
    }
    
}
