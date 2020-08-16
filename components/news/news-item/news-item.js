import {
  Card,
  CardActionButton,
  CardActionButtons,
  CardActions,
  CardMedia,
  CardPrimaryAction,
} from "@rmwc/card";
import { Typography } from "@rmwc/typography";
import Link from "next/link";
import Date from "../../date";
import newsItemStyle from "./news-item.module.css";

export const NewsItem = ({ title = "News 1", exceprt = "", date, imageUrl, id, className }) => {
  return (
    <Card className={`mdc-elevation--z4 ${className}`}>
      <CardPrimaryAction>
        <Link href="/posts/[id]" as={`/posts/${id}`}>
          <a className={newsItemStyle.ImageWrapper}>
            <CardMedia
              sixteenByNine
              style={{
                backgroundImage: `url(${imageUrl ? imageUrl : './images/news.jpg'})`,
              }}
            />
          </a>
        </Link>
        <Link href="/posts/[id]" as={`/posts/${id}`}>
          <a
            className={newsItemStyle.body}
            style={{ padding: "0 1rem 1rem 1rem" }}
          >
            <Typography
              className={newsItemStyle.heading}
              use="headline6"
              tag="h2"
            >
              {title}
            </Typography>
            <Typography
              use="subtitle2"
              tag="h3"
              theme="textSecondaryOnBackground"
              style={{ marginTop: "-1rem" }}
            >
              <Date dateString={date} />
            </Typography>
            <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
              {exceprt}
            </Typography>
          </a>
        </Link>
      </CardPrimaryAction>
      <CardActions>
        <CardActionButtons>
          <Link href="/posts/[id]" as={`/posts/${id}`}>
            <CardActionButton>Read</CardActionButton>
          </Link>
        </CardActionButtons>
      </CardActions>
    </Card>
  );
};
