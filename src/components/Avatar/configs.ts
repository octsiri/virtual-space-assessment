export enum AvatarSize {
  'xs',
  'sm',
  'md',
  'lg',
}

export type AvatarSizeTypes = keyof typeof AvatarSize;

export const avatarSizeMapper = {
  xs: {
    size: 24,
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 6,
    marginLeft: -8,
  },
  sm: {
    size: 32,
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 6,
    marginLeft: -10,
  },
  md: {
    size: 48,
    fontSize: 28,
    borderWidth: 3,
    borderRadius: 6,
    marginLeft: -12,
  },
  lg: {
    size: 64,
    fontSize: 40,
    borderWidth: 3.5,
    borderRadius: 6,
    marginLeft: -14,
  },
};
