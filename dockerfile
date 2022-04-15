# 设置基础镜像
FROM nginx

# 将dist文件中的内容复制到 /www/web/site 这个目录下面
COPY dist/  /www/web/site

