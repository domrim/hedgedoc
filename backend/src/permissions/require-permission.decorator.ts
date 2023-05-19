/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { CustomDecorator, SetMetadata } from '@nestjs/common';

import { RequiredPermission } from './required-permission.enum';

export const PERMISSION_METADATA_KEY = 'requiredPermission';

/**
 * This decorator gathers the {@link RequiredPermission Permission} a user must hold for the {@link PermissionsGuard}
 * @param permissions - an array of permissions. In practice this should always contain exactly one {@link RequiredPermission}
 */
// eslint-disable-next-line func-style,@typescript-eslint/naming-convention
export const RequirePermission = (
  ...permissions: RequiredPermission[]
): CustomDecorator => SetMetadata(PERMISSION_METADATA_KEY, permissions);
