import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType('coetrappers/gutenberg-block-starter', {
  edit() {
    const blockProps = useBlockProps();

    return <div {...blockProps}>Coetrappers block starter</div>;
  },
  save() {
    const blockProps = useBlockProps.save();

    return <div {...blockProps}>Coetrappers block starter</div>;
  },
});
