import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Youtube {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  // @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  // createTime: Date;

  // @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  // updateTime: Date;
}
