## TintinDuDialog Modal Component

The `TintinDuDialog` is a customizable modal dialog component for React applications, offering a range of features to enhance user experience.

### Features

- **Customizable Close Button**: Choose between text (e.g., "Close") or an icon (e.g., "✕") for the modal's close button.
- **Custom Styles**: Pass custom styles via the `customStyles` prop to match your application's design theme.
- **Event Handling**: Utilize the `onClose` callback prop for a smooth user experience when the modal is closed.

### Table of Contents

- [Props](#props)
- [Usage Example](#usage-example)
- [Customization](#customization)
- [Further Documentation](#further-documentation)

### Props

| Prop              | Type                 | Description                                                  | Default |
|-------------------|----------------------|--------------------------------------------------------------|---------|
| `isOpen`          | `boolean`            | Controls the visibility of the modal.                        | -       |
| `onClose`         | `function`           | Callback when the modal is requested to be closed.           | -       |
| `children`        | `React.ReactNode`    | Content displayed inside the modal.                          | -       |
| `closeButtonStyle`| `'text'` \| `'icon'` | Style of the close button.                                   | `'text'`|
| `customStyles`    | `React.CSSProperties`| Custom styles for the modal's overlay and content areas.     | -       |

### Usage Example

```jsx
<TintinDuDialog
  isOpen={isModalOpen}
  onClose={() => setModalOpen(false)}
  closeButtonStyle="icon"
  customStyles={{
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    content: { border: '2px solid #f00' },
  }}
>
  <p>Your content here</p>
</TintinDuDialog>