import { Accordion, Divider, Flex, Grid, Heading, Paragraph, Text } from '@dynatrace/strato-components-preview';
import { useContext } from 'react';
import { ListModel } from '../models/list.model';
import Card from './card.component';
import Chip from './chip.component';
import CardImage from './card-image.component';
import { DeviceContext } from '../contexts/device.context';

interface ListProps {
  list: ListModel;
}

const List = ({ list }: ListProps) => {
  const device = useContext(DeviceContext);
  const columnCount = Math.min(2 ** device.size, list.items.length);

  return (
    <Flex flexDirection="column" marginBottom={32}>
      <Accordion defaultExpanded={list.name}>
        <Accordion.Section id={list.name}>
          <Accordion.SectionLabel>
            <Heading level={3}>{list.name}</Heading>
          </Accordion.SectionLabel>

          <Accordion.SectionContent>
            <Grid justifyContent="flex-start" gridTemplateColumns={`repeat(${columnCount}, 1fr)`} gap={16}>
              {list.items.map((item) => {
                return (
                  <Card
                    key={item.name}
                    image={item?.imagePath ? <CardImage src={item.imagePath} alt={item.name} /> : undefined}
                  >
                    <>
                      {item.metadata?.genres?.length && (
                        <div>
                          {item.metadata.genres.map((tag) => {
                            return (
                              <Chip key={tag.key} color={tag.color}>
                                {tag.key}
                              </Chip>
                            );
                          })}
                        </div>
                      )}
                    </>
                    <Flex flexDirection="column" gap={0}>
                      <Heading level={3}>{item.name}</Heading>
                      {item.metadata?.tags?.length && (
                        <Text textStyle="small-emphasized" style={{ color: '#bfbcbc' }}>
                          {item.metadata?.tags?.join('; ')}
                        </Text>
                      )}
                    </Flex>
                    <>
                      {item?.description && (
                        <>
                          <Divider />
                          <Paragraph>{item.description}</Paragraph>
                        </>
                      )}
                    </>
                  </Card>
                );
              })}
            </Grid>
          </Accordion.SectionContent>
        </Accordion.Section>
      </Accordion>
    </Flex>
  );
};

export default List;
