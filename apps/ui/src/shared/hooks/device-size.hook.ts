import { useBreakpoint } from '@dynatrace/strato-components-preview';
import { useEffect, useState } from 'react';
import { extractNumFromDeviceToken } from '../utils/device-token.util';
import { Breakpoints } from '@dynatrace/strato-design-tokens';
import { Device } from '../models/device.model';

export enum DeviceSize {
  Mobile,
  Tablet,
  Desktop,
  Widescreen,
}

/**
 * Manages viewport breakpoints and provides a device-id (<code>Device</code>)
 * according to the Dynatrace UI specification.
 *
 * <ul>
 *   <li><code>Device.Mobile</code> (0 - 640px)</li>
 *   <li><code>Device.Tablet</code> (641px - 960px)</li>
 *   <li><code>Device.Desktop</code> (961px - 1920px)</li>
 *   <li><code>Device.Widescreen</code> (1921px - ∞)</li>
 * </ul>
 *
 * @see https://developer.dynatrace.com/ui-design/layout/#breakpoints
 */
export const useDeviceSize = (): Device => {
  const [size, setSize] = useState(DeviceSize.Desktop);
  const [resize, setResize] = useState(false);
  const [isMobile, isTablet, isDesktop] = useBreakpoint([
    `(max-width: ${extractNumFromDeviceToken(Breakpoints.Max.Mobile)}px)`,
    `(min-width: ${extractNumFromDeviceToken(Breakpoints.Min.Tablet)}px) and (max-width: ${extractNumFromDeviceToken(Breakpoints.Max.Tablet)}px)`,
    `(min-width: ${extractNumFromDeviceToken(Breakpoints.Min.Desktop)}px) and (max-width: ${extractNumFromDeviceToken(Breakpoints.Max.Desktop)}px)`,
  ]);

  useEffect(() => {
    let nextDevice = DeviceSize.Widescreen;
    let resize = false;

    if (isMobile) {
      nextDevice = DeviceSize.Mobile;
      resize = true;
    } else if (isTablet) {
      nextDevice = DeviceSize.Tablet;
      resize = true;
    } else if (isDesktop) {
      nextDevice = DeviceSize.Desktop;
    }

    setSize(nextDevice);
    setResize(resize);
  }, [isMobile, isTablet, isDesktop]);

  return { size, resize };
};
