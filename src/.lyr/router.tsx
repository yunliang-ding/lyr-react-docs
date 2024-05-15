import { MarkdownViewer } from 'lyr-extra';
import User from '../../docs/user.md';
import R from '../../docs/index.md';
import Goodbod from '../../docs/good-bod.md';
import Components from '../../docs/components.md';

export default [
  {
    "path": "/user",
    "component": <MarkdownViewer content={User} />
  },
  {
    "path": "/",
    "component": <MarkdownViewer content={R} />
  },
  {
    "path": "/good-bod",
    "component": <MarkdownViewer content={Goodbod} />
  },
  {
    "path": "/components",
    "component": <MarkdownViewer content={Components} />
  }
]