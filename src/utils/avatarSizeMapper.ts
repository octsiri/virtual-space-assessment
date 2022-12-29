enum AvatarSize {
  'xs',
  'sm',
  'md',
  'lg',
}

export type AvatarSizeTypes = keyof typeof AvatarSize;

const avatarSizeMapper = {
  xs: {
    size: 20,
    fontSize: 10,
    borderWidth: 1,
    borderRadius: 2,
  },
  sm: {
    size: 30,
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 6,
  },
  md: {
    size: 36,
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 6,
  },
  lg: {
    size: 52,
    fontSize: 28,
    borderWidth: 3,
    borderRadius: 6,
  },
};

export default avatarSizeMapper;
