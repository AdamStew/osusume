import { createContext } from 'react';
import { Device } from '../models/device.model';
import { DeviceSize } from '../hooks/device-size.hook';

export const DeviceContext = createContext<Device>({ size: DeviceSize.Desktop, resize: false });
