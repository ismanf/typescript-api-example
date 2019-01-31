import * as kafka from 'kafka-node';

declare module 'kafka-node' {
  class BrokerNotAvailableError extends Error {}
}
